<template>
    <div>
        <!-- Header -->
        <home-header />

        <!-- Main Header -->
        <main-header />

        <!-- Content -->
        <div class="container">
            <div class="main-content">
                <div class="page-title">
                    <span>Kangban Board</span>
                    <a href="/create-backlog" class="create-new-item">Create New Item</a>
                </div>
                <div class="wrapper-board">
                    <div class="row">
                        <div class="item">
                            <div class="col-title">Todo</div>
                            <div class="backlogs-item">
                                <div class="project">Landmark 81 Website</div>
                                <div class="title">Phân tich dự án</div>
                                <div class="due-date">Deadline: <span>30/09/2018</span></div>
                                <div class="phase">Giai đoạn: <span>Front End</span></div>
                                <div class="assign">@luctc - </div>
                            </div>
                        </div>

                        <div class="item">
                        <div class="col-title">In Process</div>
                            <div class="backlogs-item">
                                <div class="project">Landmark 81 Website</div>
                                <div class="title">Phân tich dự án</div>
                                <div class="due-date">Deadline: <span>30/09/2018</span></div>
                                <div class="phase">Giai đoạn: <span>Front End</span></div>
                                <div class="assign">@luctc - </div>
                            </div>
                        </div>


                        <div class="item">
                            <div class="col-title">Bugs</div>
                            <div class="backlogs-item">
                                <div class="project">Landmark 81 Website</div>
                                <div class="title">Phân tich dự án</div>
                                <div class="due-date">Deadline: <span>30/09/2018</span></div>
                                <div class="phase">Giai đoạn: <span>Front End</span></div>
                                <div class="assign">@luctc - </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-title">Done</div>
                            <div class="backlogs-item">
                                <div class="project">Landmark 81 Website</div>
                                <div class="title">Phân tich dự án</div>
                                <div class="due-date">Deadline: <span>30/09/2018</span></div>
                                <div class="phase">Giai đoạn: <span>Front End</span></div>
                                <div class="assign">@luctc - </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-bar"></div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader';
import MainHeader from '../components/MainHeader';

export default {
    name: 'kan-ban-board',
    components: {
        HomeHeader,
        MainHeader
    },
    data() {
        return {

        }
    }
}
</script>


<style>
    .main-header {
        background-color: #5c85b6;
        min-height: 100px;
    }
    .main-header .site-title {
        color: #fff
    }

    .main-content {
        padding-top: 15px;
        float: left;
        width: 80%;
    }
    .main-content .page-title {
        font-weight: 700;
        font-size: 18px;
    }
    .wrapper-board {
        border: 1px solid #ccc;
        padding: 0 15px;
        margin-top: 20px;
    }
    .wrapper-board .row {
        margin-left: -10px;
        margin-right: -10px;
    }
    .wrapper-board .item{
        width: 25%;
        padding: 10px;
        float: left;
    }
    .wrapper-board .col-title {
        font-size: 14px;
        text-align: center;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .backlogs-item {
        background-color: #fcffdb;
        border: 1px solid #eee;
        padding: 3px;
        font-size: 12px;
        margin-bottom: 20px;
    }
    .backlogs-item .project {
        border: 1px solid #eee;
        text-align: center;
        padding: 6px 0 2px 0;
    }
    .backlogs-item .title {
        font-size: 14px;
        font-weight: 700;
        color: #005c99;
        margin-top: 3px;
    }
    .backlogs-item .assign {
        margin-top: 5px;
        padding-top: 5px;
        border-top: 1px solid #eee;
        color: #005c99;
    }
    .clearfix {
        clear: both;
    }

    .create-board {
        padding-right: 200px;
        padding-bottom: 100px;
    }
    .create-board span {
        font-size: 14px;
    }
    .create-board .input-group[class*=col-] {
        float: left;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 10px;
    }
    .input-select {
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        line-height: 34px;
        height: 34px;
        width: 100%;
        padding: 0 12px;
    }

    .create-board .input-group:first-child {
        margin-top: 20px;
    }
    .btn-submit-create {
        margin-top: 20px;
    }
    .btn-submit-create button {
        min-width: 150px;
    }
    .create-new-item {
        padding-left: 20px;
    }
</style>
