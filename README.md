![image](https://github.com/grigio888/GaludaoWebStore/assets/57846373/df208ce1-5aa5-474f-a5ae-86e2531cd75f)

# Requirements (Development)
In order to access the project, you must register the following in your localhosts:

```
# GaludaoWebStore hosts
127.0.0.1 www.galudaowebstore.local
127.0.0.1 galudaowebstore.local
# End of section
```

This will allow you to enter the NGINX webserver with the correct local host.

The application is only accessible through NGINX, so it need to be accessed
through those domains above.

# Requirements (Production)
If it's the first time setting the app, you need to manually create a letsencrypt certification and copy the `/etc/letsencrypt/` into `/webserver/certbot` folder.

This is due Certbot/Let'sEncrypt! only generating valid certificates through live conection, which must be maded in th server, which has the registrar pointed into it.
