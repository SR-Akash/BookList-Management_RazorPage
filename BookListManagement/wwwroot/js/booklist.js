var dataTable;
$(document).ready(function () {
    loadDataTabke();
});

function loadDataTabke() {
    dataTable = $('#DT_Load').DataTable({
        "ajax": {
            "url": "api/book",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "author", "width": "20%" },
            { "data": "isbn", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                    <a href="/booklist/Edit?id=${data}" class ='btn btn-success text-white' style='cursor:pointer; width:20%;'>
                        Edit
                    </a>
                    &nbsp;
                     <a class ='btn btn-danger text-white' style='cursor:pointer; width:20%;'onclick=Detele('/api/book?id='+${data}) >
                        Delete
                    </a>
                    </div>`;
                }, "width": "30%"
            }
        ],
        "language": {
            "emptyTable": "no data found"
        },
        "width": "100%"
    });
}

function Delete(url)
{
    swal(
    {
        title: "Are you sure?",
        text: "Once Deleted, you will not be able to recover",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        }).then((willDelete) =>
        {
            if (willDelete)
            {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(message);
                    }
                }
            });
        }
    });
      
}