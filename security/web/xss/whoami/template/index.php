<h1>Challenge 3 - Whoami</h1>
<script>
    var index = document.URL.indexOf("index=");
    var id = document.URL.substring(index + 8);
    document.write("<h2>Hello " + id.slice(0, -1) + " !</h2>");
</script>
