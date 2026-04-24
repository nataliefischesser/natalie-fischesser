<script setup lang="ts">
definePageMeta({
  layout: "primary",
  title: "Hey! What’s Good?",
  color: "pink",
});

const site = useSiteConfig();

const title = toRef(() => `${site.name} ${site.separator} ${site.jobTitle}`);

useSeoMeta({ title, ogTitle: title, titleTemplate: "%s" });
</script>

<template>
  <AppMain class="flex flex-col items-center justify-center">
    <BoardContainer>
      <BoardPiece class="h-20em w-20em">
        <Icon name="app:smile" class="text-yellow size-full scale-120" />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="rounded-full bg-blue flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="col-span-3 h-20em">
        <AppPillLink
          :to="{ name: 'about' }"
          color="red"
          class="text-1em border-2em h-full w-full active:scale-100 hover:scale-105"
        >
          <span class="text-8em text-heading">About Me</span>
        </AppPillLink>
      </BoardPiece>

      <BoardPiece class="col-span-4 h-20em">
        <input
          class="text-8em text-heading text-pink p-inline-0.5em border-0.25em outlined rounded-full bg-transparent h-full w-full uppercase focus:outline-dashed"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <Icon name="app:arrow-right" class="text-yellow size-full scale-120" />
      </BoardPiece>

      <BoardPiece class="col-span-2 h-20em">
        <div
          class="rounded-full bg-yellow flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <Icon name="app:arrow-up" class="text-blue size-full scale-120" />
      </BoardPiece>

      <BoardPiece class="col-span-2 h-20em">
        <div
          class="group rounded-full bg-red flex h-full w-full items-center justify-start relative"
        >
          <div
            class="rounded-full bg-#d9d9d9 h-full aspect-square transition-all left-0 absolute group-hover:translate-x--100% group-hover:left-full"
          />
        </div>
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="rounded-full bg-blue flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="col-span-3 h-20em">
        <AppPillLink
          :to="{ name: 'portfolio' }"
          color="green"
          class="text-1em border-2em h-full w-full active:scale-100 hover:scale-105"
        >
          <span class="text-8em text-heading">Portfolio</span>
        </AppPillLink>
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="rounded-full bg-yellow flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="col-span-full h-20em">
        <div
          class="rounded-full bg-pink flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <Icon name="app:arrow-down" class="text-red size-full scale-120" />
      </BoardPiece>

      <BoardPiece class="col-span-2 h-20em">
        <div
          class="rounded-full bg-blue flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <Icon name="app:message" class="text-pink size-full scale-120" />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="rounded-full bg-green flex h-full w-full items-center justify-center"
        />
      </BoardPiece>

      <BoardPiece class="col-span-4 h-20em">
        <AppPillLink
          :to="{ name: 'contact' }"
          color="yellow"
          class="text-1em border-2em h-full w-full active:scale-100 hover:scale-105"
        >
          <span class="text-8em text-heading">Get In Touch</span>
        </AppPillLink>
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <Icon name="app:heart" class="text-red size-full scale-120" />
      </BoardPiece>
    </BoardContainer>
  </AppMain>
</template>
