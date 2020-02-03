<template>
  <div>
    <OptionButton name="size">
        <div class="option-size">
            <svg class="size-icon">
                <use xlink:href="../assets/sprite.svg#icon-clock"></use>
            </svg>
            <p>Medium</p>
        </div>
    </OptionButton>
    <OptionButton name="speed">
        <div class="option-speed">
            <svg class="speed-icon">
                <use xlink:href="../assets/sprite.svg#icon-clock"></use>
            </svg>
            <p>1.0x</p>
        </div>
    </OptionButton>
    <OptionButton name="progression">
        <div class="option-progression">
            <svg class="Progression-icon">
                <use xlink:href="../assets/sprite.svg#icon-clock"></use>
            </svg>
            <p>Auto/Manual</p>
        </div>
    </OptionButton>
  </div>
</template>

<script>
import OptionButton from '@/components/OptionButton'

export default {
    components: {
        "OptionButton": OptionButton
    },
}
</script>