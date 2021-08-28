For ``Strings``

- SET key value
- GET key
- ttl key
- KEYS \*
- DEL key
- FLUSHALL
- EXISTS key
- expire key time
- setex key time value

For ``Arrays``

- LPUSH array value
- RPUSH array value
- LRANGE array start stop
- LPOP array
- RPOP array

For ``Sets``

- SADD myset value
- SMEMBERS myset

For ``Object/Hash``

- HSET key field value
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field

## Few extra things I explored related to Redis besides what was discussed:

1.  If you want to update the value of a pre-existing key, write the same set command again with the key name and just change the value to whatever you want now. This logic will work for every data type: string, hash, set, array

2.  To add an element in a set, we use SADD. Similarly, the command to remove an element from the set:

``srem keyname(basically the set's name) valueToBeRemoved``

3. We can use the "keys *" statement to get a list of all the keys stored in our Redis memory store. But, there's no such command if you want to have a list of both keys and their values together.
