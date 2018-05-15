//http://mockjs.com/examples.html#Number
Mock.mock('basic',{
    "string|1-10": "★"
})

Mock.mock('date',{
    "datetime": '@datetime("yyyy-MM-dd HH:mm:ss")',
    "date": '@date("yyyy-MM-dd")',
    "now": '@now'
})

Mock.mock('image',{
    "image": '@image()',
    "dataimage": '@dataImage()',
})

Mock.mock('color',{
    "color": '@color()',
    "hex": '@hex()',
    "rgb": '@rgb()',
    "hsl": "@hsl()"
})

Mock.mock('text',{
    "paragraph": '@paragraph()',
    "cparagraph": '@cparagraph()',
    "sentence": '@sentence()',
    "csentence": "@csentence()",
    "word": "@word()",
})

Mock.mock('web',{
    "url": '@url()',
    "domain": '@domain()',
    "tld": '@tld()',
    "email": "@email()",
    "ip": "@ip()",
})

Mock.mock('address',{
    "region": '@region()',
    "province": '@province()',
    "city": '@city()',
    "county": "@county()",
    "zip": "@zip()",
})

