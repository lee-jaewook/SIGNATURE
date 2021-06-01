    <template>
  <div>
    <b-navbar class="nav"  toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand router-link to='/' id="brandname">SIGNATURE</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navbar">
          <b-nav-item router-link to='/contact'>계약서 작성하기</b-nav-item>
          <b-nav-item router-link to='/managing'>계약서 관리하기</b-nav-item>
          <b-nav-item router-link to='/howtouse'>사용방법</b-nav-item>
          <b-nav-item router-link to='/Legal'>법률서비스 상담하기</b-nav-item>
          <b-nav-item router-link to='/Service'>문의하기</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
           <b-nav-item router-link to= '/login'>{{ loggedIn ? "마이페이지" : "로그인" }}</b-nav-item>
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
import { mapGetters } from 'vuex';

export default {
  name: "header",

  computed: {
        ...mapGetters('user', {
        loggedIn: 'loggedIn',
        userProfile: 'userProfile'
      }),
    },

  data() {
    return {
    };
  },

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