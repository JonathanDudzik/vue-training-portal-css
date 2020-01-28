<template>
    <div>
        <!-- This component is decouple render for the medium selector buttions bottons -->
        <!-- The logic is decoupled and found in the parent component -->
        <slot></slot>
    </div>
</template>

<script>
import CourseTemplate from '../test/CourseTemplate'

export default {
    data() {
        return {
            CourseTemplate: CourseTemplate
        }
    }
}
</script>

