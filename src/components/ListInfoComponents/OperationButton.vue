<template>


      <div
          class="dx-field">
        <div class=" inline-block mr-2">

          <DxButton
              icon="todo"
              type="success"
              title="Hazırdır"
          />
          </div>

          <div class=" inline-block mr-2">
          <DxButton
              icon="edit"
              type="default"
              title="Redaktə etmək"
          />
            </div>

        <div class=" inline-block mr-2">
         <DxButton
          icon="trash"
          type="danger"
          title="Silmək"
          @click="openPopup()"
          />
          </div>

        <div class="inline-block mr-2">
          <DxButton
              id="closeButton"
              style="background-color: #FFA500; color:#000; border-radius:5px"
              icon="close"
              title="Bağla"
          />
</div>


  <div>
    <DxPaging
        :enabled="true"
        :page-size="3"
    />
    <DxPager
        :show-page-size-selector="false"
        :show-navigation-buttons="false"
    />

  </div>
        <DxPopup

            :title="popupTitle"
            :defer-rendering="true"
            :drag-enabled="true"
            :close-on-outside-click="true"
            :show-title="true"
            :shading="true"
            :width="'auto'"
            :height="'auto'"
            :full-screen="false"
            :resize-enabled="true"
            class="popup"
            :class="['popup--xs']"
            :tab-index="-1"
            :visible="isPopupVisible"
            @hiding="closePopup"
        >

          <div class="text-center">
              <span
                  class="material-icons border-2 rounded-full p-2 mb-2 text-red-400 font-semibold border-red-400 w-auto">
          close </span>
          </div>

          <div class="text-center font-semibol text-gray-700 m-2 text-lg">
            Bu məlumatı silmək istədiyinizə əminsiniz?
          </div>

          <div class="flex justify-center mt-4 mb-2">
            <button
                @click="$emit('remove', test.id)"
                class="bg-green-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-2 w-auto ">Bəli</button>
            <button
                @click="closePopup()"
                class="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-2 w-auto">Xeyr</button>

          </div>
        </DxPopup>
      </div>

</template>
<script>
import DxButton from 'devextreme-vue/button';
import {DxPager, DxPaging} from "devextreme-vue/tree-list";
import {DxPopup} from "devextreme-vue/popup";

export default {
  components: {
    DxButton,DxPaging, DxPager,DxPopup,
  },
  props: {
    test: { type: Object, required: true }
  },
  data() {
    return {
      allowedPageSizes: [1, 2,3],
      isPopupVisible: false,
      popupTitle: '',
    }
  },
  methods: {

    openPopup(id = null){
      if (id){
        this.popupTitle = ' Məlumatı  redaktə etmək';
      }else {
        this.popupTitle = '';
        this.isPopupVisible = true;
      }
    },
    closePopup() {
      this.isPopupVisible = false;
    },

  },
};
</script>
<style scoped>

</style>
