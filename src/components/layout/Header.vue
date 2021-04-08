    <template>
    <div>
    <b-navbar class="nav" toggleable="lg" type="dark" variant="dark" >
        <b-navbar-brand href="/" id="brandname">SIGNATURE</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navbar">
            <b-nav-item href="/Write" >계약서 작성하기</b-nav-item>
            <b-nav-item href="#" >계약서 관리하기</b-nav-item>
            <b-nav-item href="#" >사용방법</b-nav-item>
            <b-nav-item href="#" >법률서비스 상담하기</b-nav-item>
            <b-nav-item href="#" >문의하기</b-nav-item>
        </b-navbar-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <b-nav-item-dropdown  size="sm" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>유저이름</em>
            </template>
            <b-dropdown-item style="font-size: 70%; text-align: center;" href="#">마이페이지</b-dropdown-item>
            <b-dropdown-item style="font-size: 70%; text-align: center;" href="#">로그아웃</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div> 
    </template>

    <style scoped>
    .navbar.navbar-dark.bg-dark{
        background-color: rgb(11,127,66);
    }

    .nav{
        
        padding-left: 2rem;
        padding-right: 2rem;
    }
    </style>

    <script>
    export default {
        name: "header"
    }
    </script>
