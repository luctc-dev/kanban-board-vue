<template>
    <header>
        <div class="container">
            <ul>
                <li><a href="/">Trang Chủ</a></li>
                <li><a href="/">Dự án</a></li>
            </ul>
            <ul class="right">
                <li>Đăng nhập với <a href="/">example@gmail.com</a></li>
                <li><a href="/">Đăng xuất</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'home-header',
    data() {
        return {

        }
    }
}
</script>

<style>
    header {
        padding: 3px 0;
        background-color: #3c5776;
    }
    header a {
        color: rgba(255,255,255,0.8);
    }
    header ul {
        display: inline-block;
    }
    header ul li {
        color: rgba(255,255,255,0.8);
        display: inline-block;
        margin-right: 10px;
    }
    header ul li a:hover {
        color: rgba(255,255,255,1);
    }
    header .right {
        float: right;
    }
</style>
