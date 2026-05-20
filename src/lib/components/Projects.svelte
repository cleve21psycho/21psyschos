<script>
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<div class="flex items-center gap-10">
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href="https://supatail.co.za/" target="_blank" rel="noopener noreferrer">
          <img src="/Vector.svg" alt="Supa Tail" class="h-10 w-auto" />
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>Supa Tail</p>
      </Tooltip.Content>
    </Tooltip.Root>

    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href="https://eliteentrepreneurschool.co.za" target="_blank" rel="noopener noreferrer">
          <img src="/ees-white.svg" alt="EES" class="h-10 w-auto" />
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>Elite Entrepreneur School</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
</div>