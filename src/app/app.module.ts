import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleFormComponent} from "./components/simpleform/simpleform.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {FormsModule } from '@angular/forms';
import {UserAgeComponent} from "./components/userage/userage.component";
import {UserGreetingComponent} from "./components/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextLengthComponent} from "./components/textlength/textlength.component";
import {CurrencyConverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenOddCheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordReverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowDateComponent} from "./components/showdate/showdate.component";
import {ShowUsernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationTableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleLoginComponent} from "./components/simplelogin/simplelogin.component";
import {FahrenheitToCelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarkListComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharacterCounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromeCheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {TemperatureConverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppingListComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialCalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodoManagerComponent} from "./components/todomanager/todomanager.component";
import {GuessNumberGameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {WordcounterComponent} from "./components/wordcounter/wordcounter.component";
import {RandomnumbergeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {UppercaseconverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {WordshufflerComponent} from "./components/wordshuffler/wordshuffler.component";
import {BMISolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernameValidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestCalculatorComponent} from "./components/interestcalculator/interestcalculator.component";
import {
  CompoundInterestCalculatorComponent
} from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import {FibonacciGeneratorComponent} from "./components/fibonaccigenerator/fibonaccigenerator.component";
import {OddSumCalculatorComponent} from "./components/oddsumcalculator/oddsumcalculator.component";
import {CurrencyFormatterComponent} from "./components/currencyformatter/currencyformatter.component";
import {RandomQuoteDisplayComponent} from "./components/randomquotedisplay/randomquotedisplay.component";
import {UppercaseGreetingComponent} from "./components/uppercasegreeting/uppercasegreeting.component";
import {DivisibleCheckerComponent} from "./components/divisiblechecker/divisiblechecker.component";
import {MultiplicationcheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {ShowAlertComponent} from "./components/showalert/showalert.component";
import {ShowParagraphComponent} from "./components/showparagraph/showparagraph.component";
import {ChangeBackgroundColorComponent} from "./components/changebackgroundcolor/changebackgroundcolor.component";
import {ResetCounterComponent} from "./components/resetcounter/resetcounter.component";
import {HideElementComponent} from "./components/hideelement/hideelement.component";
import {ShowImageComponent} from "./components/showimage/showimage.component";
import {PrintMessageToConsoleComponent} from "./components/printmessagetoconsole/printmessagetoconsole.component";
import {DisableButtonAfterClickComponent} from "./components/disablebuttonafterclick/disablebuttonafterclick.component";
import {ChangeTextSizeComponent} from "./components/changetextsize/changetextsize.component";
import {ShowSpecialMessageComponent} from "./components/showspecialmessage/showspecialmessage.component";



const routes: Routes = [
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'displayname', component: DisplaynameComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'simpleform', component: SimpleFormComponent},
  {path: 'userage', component: UserAgeComponent},
  {path: 'usergreeting', component: UserGreetingComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'textlength', component: TextLengthComponent},
  {path: 'currencyconverter', component: CurrencyConverterComponent},
  {path: 'evenoddchecker', component: EvenOddCheckerComponent},
  {path: 'wordreverser', component: WordReverserComponent},
  {path: 'showdate', component: ShowDateComponent},
  {path: 'showusername', component: ShowUsernameComponent},
  {path: 'multiplicationtable', component: MultiplicationTableComponent},
  {path: 'simplelogin', component: SimpleLoginComponent},
  {path: 'fahrenheittocelsius', component: FahrenheitToCelsiusComponent},
  {path: 'bookmarklist', component: BookmarkListComponent},
  {path: 'charactercounter', component: CharacterCounterComponent},
  {path: 'palindromechecker', component: PalindromeCheckerComponent},
  {path: 'temperatureconverter', component: TemperatureConverterComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'factorialcalculator', component: FactorialCalculatorComponent},
  {path: 'todomanager', component: TodoManagerComponent},
  {path: 'guessnumbergame', component: GuessNumberGameComponent},
  {path: 'wordcounter', component: WordcounterComponent},
  {path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
  {path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
  {path: 'uppercaseconverter', component: UppercaseconverterComponent},
  {path: 'wordshuffler', component: WordshufflerComponent},
  {path: 'bmisolver', component: BMISolverComponent},
  {path: 'usernamevalidator', component: UsernameValidatorComponent},
  {path: 'interestcalculator', component: InterestCalculatorComponent},
  {path: 'compoundinterestcalculator', component: CompoundInterestCalculatorComponent},
  {path: 'fibonaccigenerator', component: FibonacciGeneratorComponent},
  {path: 'oddsumcalculator', component: OddSumCalculatorComponent},
  {path: 'currencyformatter', component: CurrencyFormatterComponent},
  {path: 'randomquotedisplay', component: RandomQuoteDisplayComponent},
  {path: 'uppercasegreeting', component: UppercaseGreetingComponent},
  {path: 'divisiblechecker', component: DivisibleCheckerComponent},
  {path: 'showalert', component: ShowAlertComponent},
  {path: 'showparagraph', component: ShowParagraphComponent},
  {path: 'changebackgroundcolor', component: ChangeBackgroundColorComponent},
  {path: 'resetcounter', component: ResetCounterComponent},
  {path: 'hideelement', component: HideElementComponent},
  {path: 'showimage', component: ShowImageComponent},
  {path: 'printmessagetoconsole', component: PrintMessageToConsoleComponent},
  {path: 'disablebuttonafterclick', component: DisableButtonAfterClickComponent},
  {path: 'changetextsize', component: ChangeTextSizeComponent},
  {path: 'showspecialmessage', component: ShowSpecialMessageComponent},




]

@NgModule ({

  imports:[
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],

  declarations:[
    AppComponent,
    DisplayhelloworldComponent,


  ],

  providers:[

  ],

  bootstrap:[
    AppComponent]

})
export class AppModule {}

