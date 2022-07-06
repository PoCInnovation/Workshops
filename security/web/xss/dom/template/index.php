<h1>Challenge 2 - DOM</h1>
<script>
    var index = document.URL.indexOf("index=");
    var ip = document.URL.substring(index + 8);
    document.write("<h2>Hello " + ip.slice(0, -1) + " !</h2>");
</script>