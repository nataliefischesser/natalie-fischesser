<script setup lang="ts">
definePageMeta({
  layout: 'primary',
  title: 'Hey! What’s Good?',
  color: 'pink',
});

useHead({ title: 'Home' });
</script>

<template>
  <PageBase class="flex flex-col items-center justify-center">
    <BoardContainer
      class="grid grid-cols-5 grid-rows-7 gap-8 text-center text-0.6vi xl:text-0.3vi"
    >
      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-blue"
        />
      </BoardPiece>

      <BoardPiece class="col-span-3 h-20em">
        <AppPillLink
          to="/about"
          color="red"
          class="h-full w-full b-2em text-1em active:scale-100 hover:scale-105"
        >
          <span class="text-8em text-heading">About Me</span>
        </AppPillLink>
      </BoardPiece>

      <BoardPiece class="col-span-4 h-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-pink"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
        />
      </BoardPiece>

      <BoardPiece class="col-span-2 h-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-blue"
        />
      </BoardPiece>

      <BoardPiece class="col-span-2 h-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-red"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-blue"
        />
      </BoardPiece>

      <BoardPiece class="col-span-3 h-20em">
        <AppPillLink
          to="/portfolio"
          color="green"
          class="h-full w-full b-2em text-1em active:scale-100 hover:scale-105"
        >
          <span class="text-8em text-heading">Portfolio</span>
        </AppPillLink>
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
        />
      </BoardPiece>

      <BoardPiece class="col-span-full h-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-pink"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-red"
        />
      </BoardPiece>

      <BoardPiece class="col-span-2 h-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-blue"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-pink"
        />
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-green"
        />
      </BoardPiece>

      <BoardPiece class="col-span-4 h-20em">
        <AppPillLink
          to="/contact"
          color="yellow"
          class="h-full w-full b-2em text-1em active:scale-100 hover:scale-105"
        >
          <span class="text-8em text-heading">Get In Touch</span>
        </AppPillLink>
      </BoardPiece>

      <BoardPiece class="h-20em w-20em">
        <div
          class="h-full w-full flex items-center justify-center rounded-full bg-red"
        />
      </BoardPiece>
    </BoardContainer>
  </PageBase>
</template>
