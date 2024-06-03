var objc = JSON.parse($response.body);
objc = {
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
    "id": 200335,
    "is_fully_paid": false,
    "type": "recurring",
    "created": "2024-06-03 14:44:20",
    "number": "KPK7-TUFU-00C5-WE46",
    "payment_system": "stripe",
    "status": "requires_payment_method",
    "client_secret": "pi_3PNc7UH8S8oSLzdf1DDrehQ3_secret_C4qLtKQGPNuYIZprG6QRnlk9z",
    "is_renewal": false,
    "tax_currency": "USD",
    "tax_registration": null,
    "object_id": 85471,
    "content_type": 35,
    "parent": null,
    "currency": 1,
    "country": 233,
    "coupon": null
}
$done({ body: JSON.stringify(objc) });
