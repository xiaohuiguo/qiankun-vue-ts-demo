import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class  HeaderNav extends Vue {
    $router: any;
    private account: any = "";
    

    private skip(url: any) {
        this.$router.push(url)
    }

    private exit() {
        this.$router.push('/login');
    }

}
