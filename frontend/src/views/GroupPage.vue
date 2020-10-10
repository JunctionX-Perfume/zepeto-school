<template>
  <div>
    <FeedLine />

    <flicking
      :options="{ gap: 10, bound: true, moveType: 'freeScroll' }"
      :tag="'div'"
      :viewportTag="'div'"
      :cameraTag="'div'"
    >
      <div>
        <div>Contetns of panel 0</div>
      </div>
      <div>
        <div>Contetns of panel 1</div>
      </div>
      <div>
        <div>Contetns of panel 2</div>
      </div>
      <div>
        <div>Contetns of panel 3</div>
      </div>
      <div>
        <div>Contetns of panel 4</div>
      </div>
      <div>
        <div>Contetns of panel 5</div>
      </div>
    </flicking>

  </div>
</template>

<script>
import FeedLine from '@/components/FeedLine.vue'
import { Flicking } from '@egjs/vue-flicking'

export default {
  name: 'GroupPage',
  components: {
    FeedLine,
    Flicking
  }
}
</script>
