<script lang="ts">
  import { typed } from "./typed";

  const { Generic: GenericNumber } = typed(0);
  const { Generic: GenericString } = typed("test");
</script>

<main>
  <GenericNumber value={0} />
  <GenericString value={"test"} />
</main>