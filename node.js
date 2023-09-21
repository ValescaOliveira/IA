[
    {
        "id": "05cf28f6d48825ca",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b2afe2c3297c05a9",
        "type": "telegram receiver",
        "z": "05cf28f6d48825ca",
        "name": "Pedretibot",
        "bot": "05eafddd7d2ea36b",
        "saveDataDir": "",
        "filterCommands": false,
        "x": 160,
        "y": 20,
        "wires": [
            [],
            [
                "915fd5522de6f03e"
            ]
        ]
    },
    {
        "id": "915fd5522de6f03e",
        "type": "debug",
        "z": "05cf28f6d48825ca",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 340,
        "y": 40,
        "wires": []
    },
    {
        "id": "c4409198eeaab6b7",
        "type": "watson-assistant-v2",
        "z": "05cf28f6d48825ca",
        "name": "",
        "service-endpoint": "",
        "assistant_id": "25723063-3b11-45c5-8651-404c2d821068",
        "debug": false,
        "restart": false,
        "return_context": true,
        "alternate_intents": false,
        "multisession": true,
        "timeout": "",
        "optout-learning": false,
        "persist-session-id": false,
        "x": 470,
        "y": 220,
        "wires": [
            [
                "634989fa8934f114"
            ]
        ]
    },
    {
        "id": "e7a160f4fc1534da",
        "type": "function",
        "z": "05cf28f6d48825ca",
        "name": "prepara mensagem entrada",
        "func": "msg.params = {\n    \"session_id\" : msg.payload.session_id !=='undefined'? msg.payload.session_id:\"\"\n};\nmsg.payload = msg.payload.mensagem;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 240,
        "y": 160,
        "wires": [
            [
                "c4409198eeaab6b7"
            ]
        ]
    },
    {
        "id": "634989fa8934f114",
        "type": "function",
        "z": "05cf28f6d48825ca",
        "name": "prepara retorno",
        "func": "msg.payload = msg.payload.output.generic;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 260,
        "wires": [
            [
                "eb45547774d0da51"
            ]
        ]
    },
    {
        "id": "85eb1814a8b3b710",
        "type": "http in",
        "z": "05cf28f6d48825ca",
        "name": "Entrada",
        "url": "/conversa",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 50,
        "y": 100,
        "wires": [
            [
                "e7a160f4fc1534da"
            ]
        ]
    },
    {
        "id": "eb45547774d0da51",
        "type": "http response",
        "z": "05cf28f6d48825ca",
        "name": "Retorno",
        "statusCode": "",
        "headers": {
            "Acesses-Control-Allow-origin": "*"
        },
        "x": 820,
        "y": 320,
        "wires": []
    },
    {
        "id": "05eafddd7d2ea36b",
        "type": "telegram bot",
        "botname": "Pedretibot",
        "usernames": "",
        "chatids": "",
        "baseapiurl": "",
        "updatemode": "polling",
        "pollinterval": "300",
        "usesocks": false,
        "sockshost": "",
        "socksprotocol": "socks5",
        "socksport": "6667",
        "socksusername": "anonymous",
        "sockspassword": "",
        "bothost": "",
        "botpath": "",
        "localbotport": "8443",
        "publicbotport": "8443",
        "privatekey": "",
        "certificate": "",
        "useselfsignedcertificate": false,
        "sslterminated": false,
        "verboselogging": false
    }
]
