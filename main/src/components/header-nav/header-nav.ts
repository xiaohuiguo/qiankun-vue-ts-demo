import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class  HeaderNav extends Vue {
    @Prop() private menuType!: string;
    $router: any;
    private account: any = "";

    private mounted() {
        console.log(this.menuType)
    }
    

    private skip(url: any) {
        this.$router.push(url)
    }

    private exit() {
        this.$router.push('/login');
    }

}
