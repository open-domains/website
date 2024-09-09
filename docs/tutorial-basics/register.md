---
sidebar_position: 2
title: Registering
---

# Registering a New Subdomain

To register a new subdomain, follow these steps:

## **1. Star and Fork the Repository**

- **Star** the [repository](https://github.com/open-domains/register) to show your support.
- **Fork** the [repository](https://github.com/open-domains/register) to make your own changes.


## **2. Create a New JSON File**

1. **Add a new file** called `example.domain.json` in the `/domains` folder. Replace `example` with your subdomain name.

2. **Edit the file** with the following format. Ensure the JSON structure is strictly followed and does not include the example records listed below. This is just a template; adjust the details according to your needs.

### **Example JSON Structure**

```json
{
    "description": "Project Description",
    "domain": "is-not-a.dev",
    "subdomain": "example",

    "owner": {
        "repo": "https://github.com/username/repo",
        "email": "hello@example.com"
    },

    "record": {
        "A": ["1.1.1.1", "1.0.0.1"],
        "AAAA": ["::1", "::2"],
        "CNAME": "example.com",
        "MX": ["mx1.example.com", "mx2.example.com"],
        "TXT": ["example_verification=1234567890"],
        "CAA": [
            { "flags": 0, "tag": "issue", "value": "letsencrypt.org" },
            { "flags": 0, "tag": "issuewild", "value": "sectigo.com" }
        ],
        "SRV": [
            { "priority": 10, "weight": 60, "port": 5060, "target": "sipserver.example.com" },
            { "priority": 20, "weight": 10, "port": 5061, "target": "sipbackup.example.com" }
        ]
    },

    "proxied": false
}
```

## **3. Submit Your Pull Request**

- **Review the Pull Request Checklist**: Make sure to complete all the items in the checklist.
- **Submit** your pull request. If you skip the checklist, your pull request may be ignored.
- **Monitor** your pull request for any feedback or required changes.

## **4. Wait for Changes to Propagate**

- After your pull request is merged, allow up to 24 hours for the changes to propagate. Typically, this process takes between 5 to 15 minutes.

## **Enjoy Your New Domain!**

If you have any questions or run into issues, feel free to [ask for help](https://github.com/username/repo/issues).

Happy domain registration!