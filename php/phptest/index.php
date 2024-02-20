<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        button {
            width: 100px
        }

        form {
            margin: auto;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 300px;
            gap: 10px;
            margin-top: 70px;
        }
        div {
            display: flex;
            justify-content: center;
        }
        h1 {
            text-align: center;
        }
        body {
            background-color: #333 ;
            color: white;
        }
    </style>
</head>

<body>
    <?php $error = '';
    if (isset($_GET["search"])) {

        $url = trim($_GET["search"]);

        if (strlen($url) > 0) {
            header("Location: https://www.google.co.il/search?q=" .  $url);
        } else {
            $error =  "empty string";
        }
    }
    ?>
    <form method="get">
        <h1>Search</h1>
        <label for="googleSearch">Search</label>
        <input type="text" name="search" id="googleSearch" required />
        <span><?php echo $error ?></span>
        <div>
            <button>submit</button>
        </div>
    </form>


</body>

</html>