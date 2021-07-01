<template>
<div class="additem">

<div class="add-delet">
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
<!-- Here add item--------------------------------------------------------------------->
            <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Hello from modal!</p>
                <div class="itemf p-5">
                    <input class="in" type="text" />
                    <b-button class="in" variant="outline-info">add</b-button>
                    <input class="in" type="text" />
                    <b-button class="in" variant="outline-info">add</b-button>
                    <input class="in" type="text" />
                    <b-button class="in" variant="outline-info">add</b-button>

                    <input class="in" type="text" />
                    <b-button class="in" variant="outline-info">add</b-button>

                    <input class="in" type="text" />
                    <b-button class="in" variant="outline-info">add</b-button>
                </div>
            </b-modal>
        </div>




</div>
    
</template>




<style scoped>

.in {
    padding: 5px;
    margin: 5px;
}

.btn-secondary {
    color: #fff;
    background-color: #135b9b !important;
    border-color: #6c757d;
}
</style>





<script>
export default {
    name: 'AddItem',
}
</script>