<template>
  <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
  <v-dialog
    v-else-if="!user"
    v-model="dialog"
    max-width="800"
    :fullscreen="$vuetify.breakpoint.xs"
  >
    <template #button-content>
      <em>로그인하기</em>
    </template>
    <b-dropdown-item @click="props.login">로그인</b-dropdown-item>
    <b-dropdown-item href="#">회원가입</b-dropdown-item>
  </v-dialog>

  <b-nav-item-dropdown offset-y v-else-if="user" right>
    <!-- Using 'button-content' slot -->
    <template #button-content>
      <em>로그인하기</em>
    </template>
    <b-dropdown-item @click="props.login">로그인</b-dropdown-item>
    <b-dropdown-item href="#">회원가입</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "",
};
</script>