import dashboard from './public/dashboard.png';
import invest from '../images/invest.png'
import plans from '../images/finance.png'
export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: true,
    lighTextDesc: true,
    topLine:'Finicial Web Advisior',
    headline: ' We set you up for Retirement...',
    description: 'Retirement planning is complicated. Getting help early might be your key to retiring comfortably, but even if you’re older and behind on your savings, Finicial Web Advisor can identify unexpected areas for improvement.',
    buttonLabel: 'We Can Help You Get Started',
    imgStart: false,
    img: dashboard,
    alt:'dashboard',
    dark: true,
    primary: true,
    darkText: false
}
export const homeObjtwo = {
    id: 'about',
    lightBg: false,
    lightText: false,
    lighTextDesc: false,
    topLine:'Thinking About Investmest',
    headline: 'We can answer all you questions about Investment',
    description: 'Do you keep telling yourself you’ll invest when you make more money, or that you’ll get around to it “someday.” \n \n Do You ever wonder How Much Money Do I Need To Start? \n Or When Should I Invest? \n   Or Should I invest in Short Term vs Long Term Investing? \n\n Do You Need help defining Your Risk Tolerance? Wondering How to Start Investing With: Bank, Robo, or DIY?',
    buttonLabel: 'Register Now',
    imgStart: true,
    img: invest,
    alt:'invest',
    dark: false,
    primary: false,
    darkText: false

}
export const homeObjthree = {
    id: 'about',
    lightBg: 'false',
    lightText: true,
    lighTextDesc: true,
    topLine:'Are you ready for your Retirement?',
    headline: 'Looking for finicial advice',
    description: 'We are here to help you choose the right way to invest your money in order to help you meet your objectives. Speak to us to discuss your situation further.',
    buttonLabel: 'Create Your Profile',
    imgStart: false,
    img: plans,
    dark: true,
    primary: true,
    darkText: false

}