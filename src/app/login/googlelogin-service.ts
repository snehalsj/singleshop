export class GoogleLoginService {

    // vars
    emitter: EventEmitter<GoogleLoginModel> = new EventEmitter(true);
    private model: GoogleLoginModel = {isSignedIn:false};

    // constructor
    constructor(private http: Http) {
        console.log('googlelogin constructor');
        this.emitter.share();
    }

    // push state
    public pushState = () => {
        console.log('googlelogin pushState');
        this.model.isSignedIn = this.isUserSignedIn();
        this.emitter.emit(this.model);
    }

    // process after successful signin
    public logProfile = (googleUser: gapi.auth2.GoogleUser) => {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log('ID Token: ' + id_token);

        this.pushState();
    }

    // signout of google 
    public signOut = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.pushState();
            console.log('User signed out.');
        });
    }

    // check if user is signed in
    public isUserSignedIn = (): boolean => {
        console.log('googlelogin isUserSignedIn');
        //this.initAuth2();
        var signedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        console.log('user is signed in: ' + signedIn);
        return signedIn;
    }

}