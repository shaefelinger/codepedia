# SSH

## Gererate Key - OSX:

```
ssh-keygen -t rsa -b 4096
```

move in folder `.ssh`

use the public key with GitHub etc.

## Add

add private-key:

```
ssh-add .ssh/<filename>
```

## Add permanently:

create config-file in `.ssh`:

```
touch config
```

copy into file:

```
Host *
UseKeychain yes
AddKeysToAgent yes
IdentityFile ~/.ssh/<filename>
```

