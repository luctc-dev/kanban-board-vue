<template>
    <div id="page-login">
        <div class="container">
            <div class="card card-container">
                <img id="profile-img" alt="" class="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />

                <form id="form-signin" class="form-signin">
                    <div class="form-group">
                        <input type="email" name="email" class="form-control" placeholder="Địa chỉ email" />
                        <label id="email-error" class="error">Error email</label>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" class="form-control" placeholder="Mật khẩu" />
                        <label id="email-error" class="error">Error password</label>

                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                        <div class="loader"></div>
                        Đăng nhập</button>
                    <button class="btn btn-lg btn-primary btn-block btn-signin sending" type="submit">
                        <div class="loader"></div>
                        Đăng nhập</button>
                </form>
                <div><a href="#" class="register">Đăng ký một tài khoản!</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>

<style>

</style>
