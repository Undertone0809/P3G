# API Examples

This page provides practical examples of how to use the {{ cookiecutter.project_name }} API in various scenarios.

## Authentication Examples

### API Key Authentication

```python
import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.get(f"{BASE_URL}/user/profile", headers=headers)
print(response.json())
```

### OAuth Authentication

```python
import requests
from requests_oauthlib import OAuth2Session

client_id = "your_client_id"
client_secret = "your_client_secret"
token_url = "https://api.example.com/oauth/token"

oauth = OAuth2Session(client_id)
token = oauth.fetch_token(
    token_url=token_url,
    client_id=client_id,
    client_secret=client_secret
)

response = oauth.get("https://api.example.com/v1/protected-resource")
print(response.json())
```

## Data Retrieval Examples

### Fetching a List of Resources

```python
import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Get a list of resources with pagination
params = {
    "page": 1,
    "limit": 10,
    "sort": "created_at",
    "order": "desc"
}

response = requests.get(
    f"{BASE_URL}/resources", 
    headers=headers,
    params=params
)

data = response.json()
for item in data["items"]:
    print(f"ID: {item['id']}, Name: {item['name']}")

# Print pagination info
print(f"Page {data['page']} of {data['total_pages']}")
print(f"Showing {len(data['items'])} of {data['total_items']} items")
```

### Filtering Resources

```python
import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Filter resources by specific criteria
params = {
    "status": "active",
    "category": "technology",
    "created_after": "2023-01-01"
}

response = requests.get(
    f"{BASE_URL}/resources", 
    headers=headers,
    params=params
)

data = response.json()
print(f"Found {len(data['items'])} matching resources")
```

## Data Modification Examples

### Creating a New Resource

```python
import requests
import json

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Data for the new resource
new_resource = {
    "name": "My New Resource",
    "description": "This is a description of my new resource",
    "category": "technology",
    "tags": ["api", "example", "tutorial"]
}

response = requests.post(
    f"{BASE_URL}/resources",
    headers=headers,
    data=json.dumps(new_resource)
)

if response.status_code == 201:
    created_resource = response.json()
    print(f"Resource created with ID: {created_resource['id']}")
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

### Updating an Existing Resource

```python
import requests
import json

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

resource_id = "resource_id_to_update"

# Updated data
updated_data = {
    "name": "Updated Resource Name",
    "description": "This is the updated description",
    "tags": ["updated", "api", "example"]
}

response = requests.put(
    f"{BASE_URL}/resources/{resource_id}",
    headers=headers,
    data=json.dumps(updated_data)
)

if response.status_code == 200:
    updated_resource = response.json()
    print(f"Resource updated: {updated_resource['name']}")
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

## Error Handling Examples

```python
import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

try:
    response = requests.get(f"{BASE_URL}/resources/non_existent_id", headers=headers)
    
    # Check for successful response
    response.raise_for_status()
    
    # Process successful response
    data = response.json()
    print(data)
    
except requests.exceptions.HTTPError as http_err:
    if response.status_code == 404:
        print("Resource not found")
    elif response.status_code == 401:
        print("Authentication failed")
    elif response.status_code == 403:
        print("Permission denied")
    elif response.status_code == 429:
        print("Rate limit exceeded")
    else:
        print(f"HTTP error occurred: {http_err}")
    
    # Try to get more details from the response
    try:
        error_details = response.json()
        print(f"Error details: {error_details}")
    except:
        print(f"Error response: {response.text}")
        
except requests.exceptions.ConnectionError:
    print("Connection error - please check your internet connection")
except requests.exceptions.Timeout:
    print("Request timed out - please try again later")
except requests.exceptions.RequestException as err:
    print(f"An error occurred: {err}")
```

## Advanced Examples

### Batch Operations

```python
import requests
import json

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Batch update multiple resources
batch_data = {
    "operations": [
        {
            "id": "resource_id_1",
            "operation": "update",
            "data": {
                "status": "active",
                "priority": "high"
            }
        },
        {
            "id": "resource_id_2",
            "operation": "update",
            "data": {
                "status": "inactive",
                "priority": "low"
            }
        },
        {
            "id": "resource_id_3",
            "operation": "delete"
        }
    ]
}

response = requests.post(
    f"{BASE_URL}/batch",
    headers=headers,
    data=json.dumps(batch_data)
)

results = response.json()
print(f"Batch operation completed with {results['success_count']} successes and {results['error_count']} errors")
```

### Webhooks Setup

```python
import requests
import json

API_KEY = "your_api_key_here"
BASE_URL = "https://api.example.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Register a webhook to receive notifications
webhook_data = {
    "url": "https://your-app.com/webhook-receiver",
    "events": ["resource.created", "resource.updated", "resource.deleted"],
    "active": True,
    "secret": "your_webhook_secret_for_signature_verification"
}

response = requests.post(
    f"{BASE_URL}/webhooks",
    headers=headers,
    data=json.dumps(webhook_data)
)

if response.status_code == 201:
    webhook = response.json()
    print(f"Webhook registered with ID: {webhook['id']}")
    print(f"Subscribed to events: {', '.join(webhook['events'])}")
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

## Next Steps

Now that you've seen these examples, you can:

1. Explore the [API Overview](/api/) for more detailed documentation
2. Check our [GitHub repository](https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}) for more code samples
3. Join our [community forum](https://example.com/forum) to ask questions and share your implementations
