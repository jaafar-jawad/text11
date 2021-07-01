<template>
    <div class="container products-page">
        <div class="cover"></div>


        <div>
            <input type="text">
        </div>
        <div class="    ">
            <div class="product-item my-2" v-for="id in 10" :key="id">
                <b-card
                    title="Card title that wraps to a new line"
                    img-src="~/assets/l.jpg"
                    img-alt="Image"
                    img-top
                    img-height="150"
                    img-width="150"
                >
                    <b-card-text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </b-card-text>
                </b-card>
            </div>
        </div>



        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {};
</script>
<style>
.product-item {
    max-width: 300px;
}
.cover {
    height: 300px;
    width: 100%;
}
</style>
