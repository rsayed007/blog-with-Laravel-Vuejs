<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
            <!-- general form elements -->
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Add New Category</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form role="form" @click.prevent='addCategory()'>
                        <div class="card-body">
                            <div class="form-group">
                                <label  for="exampleInputEmail1">Category name</label>
                                <input type="text" class="form-control" name="cat_name" v-model="form.cat_name" id="cat_name" placeholder="Enter category name..."  :class="{ 'is-invalid': form.errors.has('cat_name') }">
                                <has-error :form="form" field="cat_name"></has-error>
                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
 
    </div>
</template>

<script>
    export default {
        name: 'New',
        data(){
            return {
                form: new Form({
                    cat_name: '',
                })
            }
        },
        methods:{
            addCategory(){
                this.form.post('/add_category')
                    .then(( responce )=>{
                        this.$router.push('/category')

                        Toast.fire({
                            type: 'success',
                            title: 'Category added successfully'
                        })

                    })
                    .catch(()=>{
                        console.log('error')
                    })
                }
        },
        mounted() {
            //console.log('Component mounted.')
        }
    }
</script>
