<template>
    <div id="page-register">
        <div class="container">
            <div class="card card-container">
                <img id="profile-img" alt="" class="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" class="profile-name-card"></p>

                <form id="form-signup" class="form-signin">
                    
                    <div class="form-group">
                        <!-- <label>Email</label> -->
                        <input type="email" class="form-control" placeholder="Địa chỉ email" />
                        <label class="error">Error email</label>
                    </div>
                    <div class="form-group">
                        <!-- <label>Mật khẩu</label> -->
                        <input type="password" class="form-control" placeholder="Mật khẩu" />
                        <label class="error">Error password</label>
                    </div>
                    <div class="form-group">
                        <!-- <label>Nhập lại mật khẩu</label> -->
                        <input type="password" class="form-control" placeholder="Nhập lại mật khẩu" />
                        <label class="error">Error confirm password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                        <div class="loader"></div>
                        Đăng ký</button>
                    <button class="btn btn-lg btn-primary btn-block btn-signin sending" type="submit">
                        <div class="loader"></div>
                        Đăng ký</button>
                </form>

                <a href="#" class="register">Đăng nhập</a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
