<template>
    <div class="main-content">
        <page-title title="Tạo mới một Backlog Item"/>
        <!-- <div class="page-title">
            <span>Create New Backlog Item</span>
        </div> -->
        <div class="create-board">
            <div class="row">
                <div class="col-xs-12 input-group">
                    <label>Tiêu đề</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-xs-12 input-group">
                    <label>Mô tả tác vụ</label>
                    <textarea type="text" class="form-control"></textarea>
                </div>
                <div class="col-xs-12 input-group">
                    <label>Tên Project</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-xs-6 input-group">
                    <label>Ngày giờ bắt đầu</label>
                    <input type="date" class="form-control" />
                </div>
                <div class="col-xs-6 input-group">
                    <label>Deadline</label>
                    <input type="date" class="form-control" />
                </div>
                <div class="col-xs-6 input-group">
                    <label>Trang thái</label>
                    <select class="input-group input-select">
                        <option value="0">Todo</option>
                        <option value="1">In process</option>
                        <option value="2">To verify</option>
                        <option value="3">Done</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Độ ưu tiên</label>
                    <select class="input-group input-select">
                        <option value="0" >Normal</option>
                        <option value="1">Low</option>
                        <option value="2">Urgent</option>
                        <option value="3">Important</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Giai đoạn</label>
                    <select class="input-group input-select">
                        <option value="Front End" >Front End</option>
                        <option value="Backend">Back End</option>
                        <option value="Design">Design</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Thành viên đảm nhận</label>
                    <select class="input-group input-select">
                        <option value="luctc" >@luctc</option>
                        <option value="khang">@khang</option>
                        <option value="nam">@nam</option>
                        <option value="tam">@tam</option>
                    </select>
                </div>
                <div class="col-xs-12 btn-submit-create">
                    <button class="btn btn-success" type="submit" >Tạo mới một BackLog</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle';
export default {
    name: 'create-task',
    components: {
        PageTitle
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
