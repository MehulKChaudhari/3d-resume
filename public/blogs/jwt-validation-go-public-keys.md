In modern applications, JSON web tokens(JWT) tokens are widely used for securely transmitting information between client and server. JWTs are signed using a private key to ensure authenticity and integrity. To verify these tokens, public keys come into play. This article will guide you through implementing a reusable Go function to validate JWT tokens using a public key.

## What is JWT Validation?

JWT validation involves verifying the authenticity of a token to ensure it was issued by a trusted source and has not been tampered with. This process typically includes:

Signature Verification: Ensuring the token's signature matches the one generated using the private key.

Claim Validation: Checking the token's claims, such as expiry (exp), issuer (iss), userID, role, permissions etc.

Public keys are used in the validation process to verify tokens signed with a private key.

## Installing the dependencies

We are using the JWT v5 package. [link](https://github.com/golang-jwt/jwt)

Install the required JWT package using the following command:

```bash
go get github.com/golang-jwt/jwt/v5
```

## JWT Validation Implementation

```go
package jwt

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"errors"
	"fmt"

	"github.com/golang-jwt/jwt/v5"
)

func ValidateToken(tokenString, publicKeyString string) (jwt.MapClaims, error) {
	// Decode the PEM-formatted public key
	block, _ := pem.Decode([]byte(publicKeyString))
	if block == nil {
		return nil, errors.New("failed to decode PEM block containing the public key")
	}

	// Parse the public key
	pubKey, err := x509.ParsePKIXPublicKey(block.Bytes)
	if err != nil {
		return nil, fmt.Errorf("failed to parse public key: %w", err)
	}

	// Assert that the key is an RSA public key
	rsaPubKey, ok := pubKey.(*rsa.PublicKey)
	if !ok {
		return nil, errors.New("public key is not an RSA key")
	}

	// Parse and validate the JWT token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return rsaPubKey, nil
	})

	if err != nil {
		return nil, fmt.Errorf("token validation failed: %w", err)
	}

	// Extract claims from the token liek expiry, issuer, userID, role etc
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		return nil, errors.New("invalid token or claims")
	}

	return claims, nil
}
```

## Key Steps in the Code

Parsing the Public Key: The PEM-encoded public key is decoded and parsed into an rsa.PublicKey instance.

Validating the Token: The JWT is parsed and its signature verified using the provided public key.

Extracting Claims: The claims are extracted from the token for further processing.

## Example Usage

Here's how you can use the ValidateToken function:

```go
package main

import (
	"fmt"
	"log"

	"yourmodule/jwt" // replace this with path to the jwtutil file
)

func main() {
	// For better approach we can store the public in ENV or AWS SSM
	publicKey := `-----BEGIN PUBLIC KEY-----
...your-public-key...
-----END PUBLIC KEY-----`

	token := "your.jwt.token"

	claims, err := jwt.ValidateToken(token, publicKey)
	if err != nil {
		log.Fatalf("Token validation failed: %v", err)
	}

	fmt.Println("Token is valid. Claims:", claims)
}
```

## Best Practices

Secure Key Storage: Store public keys securely (e.g., AWS Parameter Store, environment variables).

Error Handling: Gracefully handles errors during token validation.

Additional Claim Checks: Validate claims like exp, and iss to prevent unauthorized access.

## Real-World Applications

This function can be used in:

API Gateways: To validate tokens for incoming requests.

Microservices: For inter-service communication using JWTs.

Serverless Applications: To secure AWS Lambda endpoints.

## Conclusion

Validating JWT tokens is essential for securing your application. By using the above function, you can simplify the process of token validation while ensuring security. The modular approach makes it reusable across various projects.

Feel free to adapt this implementation to fit your specific use case! Function to JWT validation.

