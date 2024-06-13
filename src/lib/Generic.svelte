<script lang="ts" generics="T extends string | number">
	interface Props {
		value: T;
	}

	let { value }: Props = $props();
</script>

<p>
	value is <strong>{typeof value}</strong>
</p>