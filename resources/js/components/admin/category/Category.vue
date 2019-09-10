<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Category List</h3>
                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addNew">
                        <router-link to="/category-add">Add New</router-link>    
                    </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>S.N</th>
                      <th>Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>{{getAllCategory}}</td>
                      <td>
                        <a href="#" class="btn btn-success"><i class="fa fa-edit "> </i></a>
                        <a href="#" class="btn btn-danger "><i class=" fa fa-heart "> </i></a>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>
</template>

<script>
    export default {

        mounted() {
            
        },
        computed:{
          getAllCategory(){
            return this.$store.getters.getCategory
          }
        },
        methods:{

        }
    }
</script>
