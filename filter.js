
        var inputjson = {
            "Items": [
                {
                    "Brand": "Brand One",
                    "Item": "Item One"
                },
                {
                    "Brand": "Brand One",
                    "Item": "Item Two"
                },
                {
                    "Brand": "Brand One",
                    "Item": "Item Three"
                },
                {
                    "Brand": "Brand One",
                    "Item": "Item Four"
                },
                {
                    "Brand": "Brand One",
                    "Item": "Item FIve"
                },
                {
                    "Brand": "Brand Two",
                    "Item": "Item Six"
                },
                {
                    "Brand": "Brand Two",
                    "Item": "Item Seven"
                },
                {
                    "Brand": "Brand Two",
                    "Item": "Item Eight"
                },
                {
                    "Brand": "Brand Two",
                    "Item": "Item Nine"
                },
                {
                    "Brand": "Brand Two",
                    "Item": "Item Ten"
                }
            ]
        };
        $(document).ready(function () {
            filterjson();
        });
        function filterjson() {
            var res = $.grep(inputjson.Items, function (n, i) {
                return n.Brand.toLowerCase().indexOf($("#txtbrandinput").val().toLowerCase()) > -1;
            });
            var outputstr = "<table style='border:solid 1px #000; border-collapse:collapse;' border='1' cellpadding='5'><thead><th>Brand</th><th>Item</th></thead>";
            $.each(res, function (i, n) {
                outputstr += "<tr><td>" + n.Brand + "</td><td>" + n.Item + "</td></tr>";
            });
            outputstr += "</table>";
            $("#res").html(outputstr);
        }
