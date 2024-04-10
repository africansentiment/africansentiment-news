# API Documentation

## Overview
This document outlines the API endpoints for the AfricanSentiment News application.

## Endpoints

### Articles
- **GET /articles**: Retrieves all articles.
  - Optional query parameters for filtering by `country`, `keywords`, etc.
- **GET /articles/{id}**: Retrieves a specific article by its identifier.

### Publishers
- **GET /publishers**: Retrieves all publishers.
- **GET /publishers/{id}**: Retrieves a specific publisher by its identifier.

## Response Format
Responses are provided in JSON format.
