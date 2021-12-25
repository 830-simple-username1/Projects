# An introduction to Redis data types and abstractions

## Redis Keys

- Very long keys are not a good idea
- Very short keys are not a good idea
	- "user:1000:followers"
- Try to stick with a schema
	- For instance: "object-type:id"
	- Dots or dashes are often used for multi-word fields:
		-  "comment:1234:reply.to" or "comment:1234:reply-to"

- The maximum allowed key size is 512 MB

## Redis Strings

- The Redis String type is the simplest type of value you can associate with a Redis key
	- It is the only data type in Memcached, so it is also very natural for newcomers to use it in Redis.				