const axios = require('axios');

$(document).ready(function() {
  axios.get('/test', (res) => {
    console.log(data);
  })
  /*axios.post('/test', (res) => {
    console.log(res.data);
  });*/
  $("#write").on("click", function(e) {
    e.preventDefault();
    fn_openBoardWrite();
  });
});

$("a[name='title']").on("click", function(e) {
  e.preventDefault();
  fn_openBoardDetail($(this));
});

function fn_openBoardWrite() {
  var comSubmit = new ComSubmit();
  //comSubmit.setUrl("<c:url value='/sample/openBoardWrite.do' />");
  comSubmit.setUrl('/sample/openBoardWrite.do');
  comSubmit.submit();
}

function fn_openBoardDetail(obj) {
  var comSubmit = new ComSubmit();
  //comSubmit.setUrl("<c:url value='/sample/openBoardDetail.do' />");
  comSubmit.setUrl('/sample/openBoardDetail.do');
  comSubmit.addParam("IDX", obj.parent().find("#IDX").val());
  comSubmit.submit();
}

function fn_search(pageNo) {
  var comSubmit = new ComSubmit();
  //comSubmit.setUrl("<c:url value='/sample/openBoardList.do' />");
  comSubmit.setUrl('/sample/openBoardList.do');
  comSubmit.addParam("currentPageNo", pageNo);
  comSubmit.submit();
}