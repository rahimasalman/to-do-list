<template>
  <DxDataGrid
      ref="dataGrid"
      :class="tableClass"
      width="100%"
      :data-source="tableDataSource"
      :show-column-lines="showColumnLines"
      :show-row-lines="showRowLines"
      :show-borders="showBorders"
      :row-alternation-enabled="rowAlternationEnabled"
      :column-auto-width="columnAutoWidth"
      :wordWrapEnabled="wordWrapEnabled"
      @editing-start="editingStart"
      @init-new-row="initNewRow"
      @row-inserting="rowInserting"
      @row-inserted="rowInserted"
      @row-updating="rowUpdating"
      @row-updated="rowUpdated"
      @row-removing="rowRemoving"
      @row-removed="rowRemoved"
      @saving="saving"
      @saved="saved"
      @edit-canceling="editCanceling"
      @edit-canceled="editCanceled"
      :selected-row-keys="selectedRowKeys"
      :key-expr="keyExpr"
      @selection-changed="selectionChanged"
  >
    <DxButton
        id="gridDeleteSelected"
        :height="34"
        :disabled="!selectedItemKeys.length"
        text="Delete Selected Records"
        @click="deleteRecords"
    />
    <DxFilterRow :visible="searchVisible"/>
    <DxHeaderFilter :visible="headerFilter"/>
    <DxColumnFixing :enabled="columnFixing"/>
    <DxRowDragging
        :allow-reordering="allowReordering"
        :show-drag-icons="showDragIcons"
        drop-feedback-mode="push"
        :on-reorder="onReorder"
        :width="60"
    />

    <DxEditing
        :allow-updating="editAllowUpdating"
        :allow-deleting="editAllowDeleting"
        :allow-adding="editAllowAdding"
        :mode="editMode"
    />

    <DxPaging :enabled="allowPaging" :page-size="page.limit"/>
    <DxSelection
        :mode="selectionMode"
        :show-check-boxes-mode="'always'"
    />
    <DxPager
        :show-page-size-selector="false"
        :allowed-page-sizes="page.size"
        :show-info="false"
    />

    <DxColumn
        :data-field="item.dataField"
        :caption="item.caption"
        :customize-text="item.customizeText"
        :calculate-cell-value="item.calculateCellValue"
        :true-text="item.trueText"
        :false-text="item.falseText"
        :allowEditing="item.allowEditing"
        :allowFiltering="item.allowFiltering"
        :allow-fixing="item.allowFixing"
        :width="item.width ? item.width : null"
        :alignment="item.alignment ? item.alignment : null"
        :allow-sorting="allowSorting"
        :cell-template="item.template"
        :v-if="columns.length > 0 && item.show"
        :key="itemIndex+'_'+Math.random()"
        v-for="(item, itemIndex) in columns"

    >
      <DxFormat v-if="item.formatType" :type="item.formatType" :precision="item.formatPrecision"/>
    </DxColumn>

    <template #[itemTemplate(item)]="{data}" v-for="(item) in columns">
      <slot :name="item.template" :row="data.data"></slot>
    </template>


    <DxColumn
        v-if="actionColumn"
        :allow-filtering="false"
        :allow-editing="false"
        data-field="action"
        alignment="center"
        :caption="actionColumnText"
        :width="actionColumnWidth ? actionColumnWidth : null"
        cell-template="ActionTemplate"
    />
    <template #ActionTemplate="{data}">
      <slot name="actionSlot" :row="data.data"></slot>
    </template>

  </DxDataGrid>
</template>

<script>
/*
 * Import Component
 * */
import {
  DxDataGrid,
  DxColumn,
  DxColumnFixing,
  DxHeaderFilter,
  DxFilterRow,
  DxEditing,
  DxPaging,
  DxPager,
  DxFilterPanel,
  DxFilterBuilderPopup,
  DxScrolling,
  DxSelection,
  DxRowDragging,
  DxFormat
} from 'devextreme-vue/data-grid';
import {DxButton} from 'devextreme-vue/button';
import UtilDataGridAndDataTree from "../../utils/index";

export default {
  name: "WidgetTable",
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnFixing,
    DxHeaderFilter,
    DxFilterRow,
    DxRowDragging,
    DxEditing,
    DxPaging,
    DxPager,
    // eslint-disable-next-line vue/no-unused-components
    DxFilterPanel,
    // eslint-disable-next-line vue/no-unused-components
    DxFilterBuilderPopup,
    // eslint-disable-next-line vue/no-unused-components
    DxScrolling,
    DxButton,
    DxSelection,
    DxFormat
  },
  props: {
    ...UtilDataGridAndDataTree.props
  },
  data() {
    return {
      tableDataSource: [],
      item: {},
      tasks: [],
      page: {
        limit: 4,
        size: [2, 4, 6, 8]
      },
      selectedItemKeys: [],
    }
  },
  computed: {
    dxInstance() {
      return this.$refs['dataGrid'].instance;
    }
  },
  watch: {
    dataSource(val) {
      this.tableDataSource = val;
    }
  },
  created() {
    const self = this;
    self.tableDataSource = this.dataSource;
    if (self.pageLimit)
      self.page.limit = self.pageLimit;
    if (self.pageSize)
      self.page.size = self.pageSize;
  },
  methods: {
    ...UtilDataGridAndDataTree.methods,
    deleteRecords: () => {
      this.selectedItemKeys.forEach((key) => {
        this.dataSource.store().remove(key);
      });
      this.selectedItemKeys = [];
      this.dataSource.reload();
    },
    selectionChanged(data) {
      this.selectedItemKeys = data.selectedRowKeys;
    },
    onReorder(e) {
      const visibleRows = e.component.getVisibleRows();
      const toIndex = this.dataSource.indexOf(visibleRows[e.toIndex].data);
      const fromIndex = this.dataSource.indexOf(e.itemData);
      const newDataSource = [...this.dataSource];

      newDataSource.splice(fromIndex, 1);
      newDataSource.splice(toIndex, 0, e.itemData);

      const items = [];
      newDataSource.forEach((i, index) => {
        items.push({
          ...i,
          order: index + 1
        })
      })
      this.tableDataSource = items;

      this.$emit('changeOrdering', items)
    }
  }
}
</script>

<style scoped>

</style>
