<template>
  <div v-show="showDialog" @click="$emit('close')" class="dialog-wrap">
    <!-- 事件修饰符 stop 阻止事件向上触发 -->
    <div @click.stop class="dialog">
      <h3>Edit</h3>
      <form action>
        <label for>类型</label>
        <select ref="country" :value="currentBook.country">
          <option style="color: #ccc;" value>类型</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="Eurozone">Eurozone</option>
        </select>
        <br />
        <label for>标题</label>
        <input ref="title" :value="currentBook.title" type="text" />
        <br />
        <label for>状态</label>
        <select ref="status" :value="currentBook.status">
          <option style="color: #ccc;" value="0">状态</option>
          <option value="published">published</option>
          <option value="draft">draft</option>
          <option value="delete">delete</option>
        </select>
        <br />
        <label for>重要性</label>
        <select ref="importance" :value="currentBook.importance">
          <option style="color: #ccc;" value="0">重要性</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <label for>点评</label>
        <textarea ref="comment" :value="currentBook.comment" cols="30" rows="10"></textarea>
        <br />
        <button @click.prevent="ok">确定</button>
        <!-- event.preventDefault  阻止默认行为  a的超链接 表单的默认提交和重置 -->
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  props: ['showDialog', 'currentBook'],
  methods: {
    ok() {
      const newBook = { ...this.currentBook }
      newBook.country = this.$refs.country.value
      newBook.title = this.$refs.title.value
      newBook.status = this.$refs.status.value
      newBook.importance = this.$refs.importance.value
      newBook.comment = this.$refs.comment.value
      this.$parent.editBook(newBook)
      this.$emit('close')
    }
  }
}
</script>
<style>
.dialog-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.dialog {
  width: 50%;
  /* 找最近的 position 祖先 */
  position: absolute;
  padding: 20px;
  background-color: #fff;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
</style>