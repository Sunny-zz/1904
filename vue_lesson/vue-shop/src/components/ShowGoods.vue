<template>
  <div class="show-goods">
    <SearchForm />
    <ShowContent />
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import ShowContent from "./ShowContent";
export default {
  name: "ShowGoods",
  components: {
    SearchForm,
    ShowContent
  }
};
</script>

<style>
.show-goods {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
