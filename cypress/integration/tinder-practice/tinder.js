const baseurl = 'https://tinder.com/'


it ('logijt into tinder account', () => {

cy.visit(baseurl);



       cy.viewport(1920, 850)
    
       //cy.get('[data-testid=privacyPreferencesAccept]').click();

       cy.get('[data-testid=appLoginBtn]').click();
       cy.get('[data-testid="loginWithGoogle"]').click({force: true});
    //cy.url().should('contains', 'https://accounts.google.com/o/oauth2/auth');

       cy.url().should('contains', 'https://accounts.google.com/o/oauth2/iframe');
       cy.url().should('contains', 'https://accounts.google.com/o/oauth2/auth');
       
    
       cy.get('div > .D\(ib\)--s > div > .My\(10px\) > .button').click()
    
       cy.visit('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Ftinder.com%3Fid%3Dauth666176&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=230402993429-g4nobau40t3v3j0tvqto4j8f35kil4hf.apps.googleusercontent.com&ss_domain=https%3A%2F%2Ftinder.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow')
    
       cy.get('.JDAKTe:nth-child(2) > .lCoei > .d2laFc > .tgnCOd > .WBW9sf > .wLBAL').click()
    
       cy.visit('https://accounts.google.com/signin/oauth/consent?authuser=1&part=AJi8hANgDe8SKXrKiTmvw_6gcUq7UjsxpmbwSlrlq-J3OgV24WLNNAxgH1Y4wBEuKwzajjD7dc2lou0IzUULrXOqBANBbgU6JEHU1RwbjZvt5rwAhZOupaD3jBHCsIt2ErWpe9ccCy98TL6hBZT0CCCoRuu5_3XrhZCG4YfOOxo4NJ5JmKt-qziX8rrTZocjCb2ONK5bIGdidJl-H9KRf72kcDB2mt4ucE_Om84DcPKDDu4RhrNirs5DRQkLMUAmDt7Lf4g6F2GJJqifGjCHUjzxwV2JZYotunllIZS7suSoANk7SWin7uFEqnou7t_dUKthLMfOptl_NM6qWURzOE0g813gx4t6o40MxNzt02v0lK6zWDAyTlW1fq-ZFau8xZZzv8CbBfW0BS7n420ixILejoTEQukHFmTRhpNLqREywx_SvXiCK54IDouAxwrzn1QcKryRIZvpU3xspUkqdE3yIX7lkk_iPw&as=S1057664754%3A1645403945418158&pli=1&rapt=AEjHL4MDUHmQXC496JBByKLR33acdkD6zN6tI4eN3OzWuJ_3GT3QFTfCl5x-nHmjSIScFK60zKt449VFjs1G9b7X9L2d0K54ug#')
    
       cy.get('.Mx\(a\):nth-child(4) > .button > .Pos\(r\) > .D\(b\) > .Scale\(\.5\) > path').click()
    
    })
   
