const UtilDataGridAndDataTree = {
    props: {
        dataSource: {
            default: Array,
            type: Array,
            required: true
        },
        columns: {
            default: Array,
            type: Array,
            required: true
        },
        tableClass: {
            default: null
        },
        dataStructure: {
            default: "tree",
            type: String,
        },
        keyExpr: {
            default: 'id',
        },
        parentIdExpr: {
            default: 'parent_id',
        },
        showColumn:{
            default:true,
        },
        allowSorting:{
            default:true,
            type: Boolean,
        },
        calculateCellValue:{
            type: Function,
        },
        searchVisible:{
            default:true,
            type: Boolean,
        },
        selectionMode:{
            default:null
        },
        selectedRowKeys:
            {
                default: null,
                type: Array
            },
        actionColumn: {
            default: true,
            type: Boolean
        },
        actionColumnText: {
            default: null,
            type: String
        },
        actionColumnWidth: {
            default: null,
        },
        showColumnHeaders:{
            default: false,
            type: Boolean
        },
        showColumnLines: {
            default: true,
            type: Boolean
        },
        showRowLines: {
            default: true,
            type: Boolean
        },
        wordWrapEnabled: {
            default: true,
            type: Boolean
        },
        showBorders: {
            default: false,
            type: Boolean
        },
        rowAlternationEnabled: {
            default: false,
            type: Boolean
        },
        columnAutoWidth: {
            default: true,
            type: Boolean
        },
        filterRow: {
            default: true,
            type: Boolean
        },
        headerFilter: {
            default: true,
            type: Boolean
        },
        editAllowUpdating: {
            default: false,
            type: Boolean
        },
        editAllowDeleting: {
            default: false,
            type: Boolean
        },
        editAllowAdding: {
            default: false,
            type: Boolean
        },
        editMode: {
            default: 'row',
            type: String
        },

        pageLimit: {
            default: null,
            type: Number
        },
        allowPaging: {
            default: true,
            type: Boolean
        },
        pageSize: {
            default: null,
            type: Array
        },
        columnFixing: {
            default: false,
            type: Boolean
        },
        allowReordering:{
            default:null
        },
        showDragIcons:{
            default:null
        },
    },

    methods: {
        /*
        * Item Template
        * */
        itemTemplate(item) {
            return item && item.template ? item.template : null;
        },
        /*
        * Editing Start
        * */
        editingStart(row) {
            this.$emit('dxEditingStart', row.data);
        },
        /*
        * Init New Row
        * */
        initNewRow(row) {
            this.$emit('dxInitNewRow', row.data);
        },
        /*
        * Row Inserting
        * */
        rowInserting(row) {
            this.$emit('dxRowInserting', row.data);
        },
        /*
        * Row Inserted
        * */
        rowInserted(row) {
            this.$emit('dxRowInserted', row.data);
        },
        /*
        * Row Updating
        * */
        rowUpdating(row) {
            this.$emit('dxRowUpdating', row.data);
        },
        /*
        * Row Updated
        * */
        rowUpdated(row) {
            this.$emit('dxRowUpdated', row.data);
        },
        /*
        * Row Removing
        * */
        rowRemoving(row) {
            this.$emit('dxRowRemoving', row.data);
        },
        /*
        * Row Removed
        * */
        rowRemoved(row) {
            this.$emit('dxRowRemoved', row.data);
        },
        /*
        * Saving
        * */
        saving(row) {
            this.$emit('dxSaving', row.data);
        },
        /*
        * Saved
        * */
        saved(row) {
            this.$emit('dxSaved', row.data);
        },
        /*
        * Edit Canceling
        * */
        editCanceling(row) {
            this.$emit('dxEditCanceling', row.data);
        },
        /*
        * Edit Canceled
        * */
        editCanceled(row) {
            this.$emit('dxEditCanceled', row.data);
        }
    }
}
export default UtilDataGridAndDataTree;
