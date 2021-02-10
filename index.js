import Vue from "vue";

Vue.component("text-editor", {
  data: function() {
    return {
      message: "✏️ Start writing..."
    };
  },
  methods: {
    viewMessage: function() {
      alert(this.message);
    }
  },

  template: `
  <div class="block">
    <textarea 
      name="editor"
      v-model="message"
      v-bind:placeholder="message"
      class="p-5 h-40 w-64 shadow-md rounded-md">
    </textarea>
    <div class="text-right">
      <button  v-on:click="viewMessage" class="block bg-blue-500 font-bold py-2 px-4 rounded text-white button float-right">
          Save! 
      </button>
    </div>
  </div>
`
});

new Vue({
  el: "#app",
  data: {}
});
