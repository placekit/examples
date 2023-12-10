<script>
	import { createEventDispatcher, onMount } from 'svelte';

	import placekitAutocomplete from '@placekit/autocomplete-js';
	import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';
  
  const dispatch = createEventDispatcher();

	let input;
	let client;
	let state;

  const {
    apiKey,
    options,
    geolocation = true,
    class: className,
    ...inputProps
  } = $$props;

	function toggleGeolocation() {
		if (client) {
			if (state.geolocation) {
				client.clearGeolocation();
			} else {
				client.requestGeolocation();
			}
		}
	}

	onMount(() => {
		client = placekitAutocomplete(apiKey, {
			target: input,
      ...options,
		}).on('open', () => {
      dispatch('open');
		}).on('close', () => {
      dispatch('close');
		}).on('results', (query, results) => {
      dispatch('results', { query, results });
		}).on('pick', (value, item, index) => {
      dispatch('pick', { value, item, index });
		}).on('error', (error) => {
      dispatch('error', error);
		}).on('dirty', (dirty) => {
      dispatch('dirty', dirty);
		}).on('empty', (empty) => {
      dispatch('empty', empty);
		}).on('freeForm', (freeform) => {
      dispatch('freeform', freeform);
		}).on('geolocation', (geolocation, position, error) => {
      dispatch('geolocation', { geolocation, position, error });
		}).on('countryChange', (item) => {
      dispatch('countrychange', item);
		}).on('state', ({ ...newState }) => { // spread to remove `client.state` reference
			state = newState;
      dispatch('state', newState);
		});

		// inject initial state from client
		state = { ...client.state }; // spread to remove `client.state` reference
		return () => {
			client.destroy();
		};
	});
</script>

<svelte:options accessors={true} />
<div class={`pka-input ${className}`.trim()}>
  {#if geolocation}
    <button
      type="button"
      title="Activate geolocation"
      role="switch"
      class="pka-input-geolocation"
      class:pka-enabled={state?.geolocation}
      aria-checked={state?.geolocation}
      disabled={inputProps.disabled}
      on:click={toggleGeolocation}
    >
      <span class="pka-sr-only">Activate geolocation</span>
    </button>
  {/if}
	<button
		type="button"
		class="pka-input-clear"
		title="Clear value"
		aria-hidden={state?.empty}
    disabled={inputProps.disabled}
		on:click={client?.clear}
	>
		<span class="pka-sr-only">Clear value</span>
	</button>
	<input
		bind:this={input}
		placeholder="Search places..."
		type="search"
    {...inputProps}
	>
</div>