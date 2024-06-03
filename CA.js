var objc = JSON.parse($response.body);
objc = {
    "id": 174494,
    "tax": 0.0,
    "total": 99.99,
    "total_currency": "USD",
    "goods": [
        {
            "product": 1,
            "price": 99.99,
            "bundle": "com.3D4Medical.CAWeb.B2CProLicense",
            "type": "subscription",
            "profile": 2
        }
    ],
    "currency": 1,
    "tax_registration": null
}
$done({ body: JSON.stringify(objc) });
