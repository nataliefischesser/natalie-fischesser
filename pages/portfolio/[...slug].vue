<script setup lang="ts">
import { type ColorKey } from '~/uno.config';

const { page, prev, next } = useContent();

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}
</script>

<template>
  <PageBase class="mx-auto max-w-content">
    <AppIconLink
      to="/portfolio"
      title="Back"
      icon="i-mdi-arrow-left scale-200"
      :color="page.color as ColorKey"
      class="mbe-8"
    />

    <ContentDoc
      class="max-w-full prose"
      :class="{ [`prose-${page.color}`]: page.color }"
    >
      <template #not-found>
        <h1 class="text-3xl">
          Portfolio piece was not found.
          <i class="i-mdi-emoticon-frown-outline" />
        </h1>
      </template>
    </ContentDoc>

    <div class="mbs-12 flex gap-8">
      <AppPillLink v-if="prev" :to="prev._path" :color="prev.color as ColorKey">
        <i class="i-mdi-arrow-left scale-200" />
        {{ prev.title }}
      </AppPillLink>

      <AppPillLink v-if="next" :to="next._path" :color="next.color as ColorKey">
        {{ next.title }}
        <i class="i-mdi-arrow-right scale-200" />
      </AppPillLink>
    </div>
  </PageBase>
</template>
