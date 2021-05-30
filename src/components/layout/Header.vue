    <template>
  <div>
    <b-navbar class="nav" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" id="brandname">SIGNATURE</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navbar">
          <b-nav-item href="#">계약서 작성하기</b-nav-item>
          <b-nav-item href="#">계약서 관리하기</b-nav-item>
          <b-nav-item href="#">사용방법</b-nav-item>
          <b-nav-item href="#">법률서비스 상담하기</b-nav-item>
          <b-nav-item href="#">문의하기</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <Signpage/>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

    <style scoped>
.navbar.navbar-dark.bg-dark {
  background-color: rgb(11, 127, 66);
}

.nav {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>

    <script>
import { Auth } from "aws-amplify";
import Signpage from '../../views/Sign'

export default {
  name: "header",
  components: {Signpage},
  methods: {
    async userSignOut() {
      try {
        await Auth.signOut();
      } catch (error) {
        console.log("ERROR MIENTRAS CERRABAS SESION: ", error);
      }
    },
  },
};
</script>